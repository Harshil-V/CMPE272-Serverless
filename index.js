const aws =  require("aws-sdk");
const sns = new aws.SNS({
   region:'us-east-2'
});
exports.handler = function(event, context, callback) {
   console.log("AWS lambda and SNS trigger");
   console.log(event);
   const snsmessage = event.Records[0].Sns.Message;
   console.log(snsmessage);
   sns.publish({
      Message: snsmessage,
      PhoneNumber: '+15878502168' // Replace with you Phone Number 
   }, function (err, data) {
      if (err) {
         console.log(err);
         callback(err, null);
      } else {
         console.log(data);
         callback(null, data);
      }	
   });
};
