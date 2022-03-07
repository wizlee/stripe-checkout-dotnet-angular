namespace DotnetAngularStripeExample.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Stripe.Checkout;

    [Route("create-checkout-session")]
    [ApiController]
    public class CheckoutApiController : Controller
    {
        [HttpPost]
        public ActionResult Create()
        {
            var domain = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
            var options = new SessionCreateOptions
            {
                LineItems = new List<SessionLineItemOptions>{new SessionLineItemOptions{
                    Price = "price_1KYBXXCjaVImKg1qHFuAFk3u", Quantity = 1, }, },
                Mode = "payment",
                SuccessUrl = domain + "/success.html",
                CancelUrl = domain + "/cancel.html",
            };
            var service = new SessionService();
            Session session = service.Create(options);
            return Json(session);
        }
    }
}
