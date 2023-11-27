using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using webapi.Data;
using webapi.Models;


namespace webapi.Controllers
{
    [Route("/api")]
    [ApiController]

    public class UserAssetController : ControllerBase
    {
        private readonly DataContext _db;

        public UserAssetController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("isReady")]
        public ActionResult<bool> IsReady()
        {
            return Ok(true);
        }

        [HttpGet]
        [Route("BringAssets")]

        public async Task<ActionResult<IEnumerable<UserAsset>>> GetUserAsset()
        {
            var userAssets = await _db.userAssets
                .Select(x => new { CoinCode = x.CoinCode, Amount = x.Amount })
                .ToListAsync();

            return Ok(userAssets);
        }

        [HttpGet]
        [Route("UserAsset/{coincode}")]

        public  ActionResult<UserAssetResponse> GetAsset(string coincode)
        {
            coincode = coincode.ToLower();
            var userAsset = _db.userAssets.FirstOrDefault(u => u.CoinCode.ToLower() == coincode);

            if (userAsset != null)
            {
                var result = new UserAssetResponse
                {
                    CoinCode = userAsset.CoinCode,
                    Amount = userAsset.Amount
                };
                return Ok(result);

            }

            return NotFound();
        }

        [HttpPost]

        [Route("BuyCoin")]
        public async Task<ActionResult<string>> BuyCoin([FromBody] BuyCoinRequest request)
        {
            try
            {
                var user =await _db.users.FirstAsync();

                if ( user.Balance >= request.Amount * request.PricePerCoin) 
                {
                    var existingUserAsset = _db.userAssets
                       .FirstOrDefault(a => a.CoinCode == request.CoinCode);

                    if (existingUserAsset != null)
                    {
                        existingUserAsset.Amount += request.Amount;
                    }
                    else
                    {
                        var newUserAsset = new UserAsset
                        {
                            
                            CoinCode = request.CoinCode,
                            Amount = request.Amount,
                            CoinImageURL = request.CoinImageURL,
                            
                        };

                        _db.userAssets.Add(newUserAsset);
                    }

                    user.Balance -= request.Amount * request.PricePerCoin;

                    var purchase = new BuyTranscation
                    {
                        
                        CoinCode = request.CoinCode,
                        Amount = request.Amount,
                        PricePerCoin = request.PricePerCoin,
                        TrascationTime = DateTime.UtcNow,
                        CoinImageURL = request.CoinImageURL,
                    };

                    _db.buyTranscations.Add(purchase);

                    _db.SaveChanges();

                    return Ok(new { message = $"Success! Coin purchased successfully. Current balance: ${user.Balance}" });
                }

                else
                {
                    return BadRequest(new { message = "Insufficient balance!" });
                }
            }

            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }


        }
        [HttpGet]
        [Route("GetCurrentBalance")]

        public IActionResult GetCurrentBalance()
        {
            var user = _db.users.FirstOrDefault();

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user.Balance);
        }

       

        [HttpPost]

        [Route("SellCoin")]
        public async Task<ActionResult<string>> SellCoin([FromBody] SellCoinRequest request)
        {
            try
            {
                var userAsset = await _db.userAssets.FirstOrDefaultAsync(u => u.CoinCode == request.CoinCode);

                if (userAsset == null || userAsset.Amount < request.Amount)
                {
                    return BadRequest("Insufficient coin balance!!");
                }

                //add the sold coins' value to user balance
                var soldAmount = request.Amount * request.PricePerCoin;

                var user =  _db.users.FirstOrDefault();
                user.Balance += soldAmount;
                

                //record the sell request in hte coinpurchace table for transcation history

                var sellRequestEntry = new SellTranscation
                {
                   
                    CoinCode = request.CoinCode,
                    Amount = request.Amount,
                    PricePerCoin = request.PricePerCoin,
                    TranscationTime = DateTime.UtcNow,
                    CoinImageURl = request.CoinImageURl,
                };
                _db.sellTranscations.Add(sellRequestEntry);

                //update userAsset table
                userAsset.Amount -= request.Amount;

                _db.SaveChanges();

                return Ok($"Sell successful!.  Current balance: ${user.Balance}");

            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("BringTranscationHistory")]

        public async Task<IActionResult> GetTranscation()
        {
            try
            {
                var buyTranscations =await _db.buyTranscations
                    .Select(b => new TranscationResult
                    {
                        TransactionId = b.TranscationId,
                        CoinCode = b.CoinCode,
                        Amount = b.Amount,
                        PricePerCoin = b.PricePerCoin,
                        TransactionTime = b.TrascationTime,
                        CoinImageUrl = b.CoinImageURL,
                        TransactionType = "Buy"

                    }).ToListAsync();

                var sellTranscations =await _db.sellTranscations
                    .Select(s => new TranscationResult
                    {
                        TransactionId = s.TranscationId,
                        CoinCode = s.CoinCode,
                        Amount = s.Amount,
                        PricePerCoin = s.PricePerCoin,
                        TransactionTime = s.TranscationTime,
                        CoinImageUrl = s.CoinImageURl,
                        TransactionType = "Sell"

                    }).ToListAsync();

                //Combine buy and sell transcation into a single list
                var allTranscations = buyTranscations.Concat(sellTranscations).OrderBy(t => t.TransactionTime).ToList();

                return Ok(allTranscations);
            }

            catch(Exception ex)
            {
                return BadRequest(ex);
            }

        }

    }


}
