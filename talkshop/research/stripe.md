
## How to setup a stripe account

reference: https://github.com/stripe/stripe-ios

1. Create Account and Get publishable key

    SETUP_ACCOUNT

        USER/PASS  
        dearfrankg / abcd1234

    GET_API_KEY

        goto: https://dashboard.stripe.com/account/apikeys.

        TEST_SECRET_KEY: sk_test_ADQ92wIekb46qQBSlbq9Zkru
        TEST_PUBLISHABLE_KEY: pk_test_1TVvmvdCReGKUPJ2CTIEYFMg

        LIVE_SECRET_KEY: sk_live_gWB7xTObiTZ0PI3dfqdTOmLq
        LIVE_PUBLISHABLE_KEY: pk_live_v9o4u9hfL0wwpRHQF5uXHUMF

2. Replace the `stripePublishableKey` constant

    SIMPLE_APP: CheckoutViewController.swift
    CUSTOM_APP: Constants.m

3. Deploy to Heroku (Requires Heroku account)

    Head to https://github.com/stripe/example-ios-backend and click "Deploy to Heroku". Provide your Stripe test secret key for the STRIPE_TEST_SECRET_KEY field under 'Env'. Click "Deploy for Free".

4. Replace variable in the example iOS app

    Replace the backendChargeURLString variable with the app URL Heroku provides you with (e.g. "https://my-example-app.herokuapp.com")


## Test stripe api

After this is done, you can make test payments through the app (use credit card number 4242 4242 4242 4242, along with any cvc and any future expiration date) and then view them in your Stripe Dashboard!


1. Open Stripe.xcworkspace
2. Choose scheme from product->scheme menu ("iOS Tests" or "OS X Tests")
3. Run Product -> Test
