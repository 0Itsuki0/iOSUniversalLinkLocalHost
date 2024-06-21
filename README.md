# iOS Universal Link Local Host
This is a respository for testing iOS Universal Link locally.

## Set Up
1. Change the `appid_placeholder` in `.well-known/apple-app-site-association` to that of yours. 
2. Run `node index.js` to start `localhost` listen to port `80`. 
3. Run `ngrok http 80` to expose `localhost` to public. [Install ngrok](https://ngrok.com/download)
4. Copy the https address (without the https) in the Forwarding part into the Associated Domain section of your App. For example, if you have `https://eb57-1-21-121-205.ngrok-free.app`, your entry will look like `applinks:eb57-1-21-121-205.ngrok-free.app`

---

For more details on how to set up and support an iOS app to support Local Link
- [Support Universal Link (Host/Test Locally & on AWS)](https://blog.stackademic.com/swift-ios-support-universal-link-host-test-locally-on-aws-2620804062ad)
- [SwiftUI: Handle Universal Link]()



