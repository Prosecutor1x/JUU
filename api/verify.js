

const sendSmsVerification = async (phoneNumber) => {
 try {
   const data = JSON.stringify({
     to: "+919051195975",
     channel: "sms"
   });

   const response = await fetch(`https://verifyotp-8824.twil.io/start-verify`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: data,
   });

   const json = await response.json();
   return json.success;
 } catch (error) {
   console.error(error);
   return false;
 }
};

const checkVerification = async (phoneNumber, code) => {
 try {
   const data = JSON.stringify({
     to: "+919051195975",
     code,
   });

   const response = await fetch(`https://verifyotp-8824.twil.io/check-verify`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: data,
   });

   const json = await response.json();
   return json.success;
 } catch (error) {
   console.error(error);
   return false;
 }
};

module.exports = {
 sendSmsVerification,
 checkVerification,
};