
/*
export FEDERATION_FUNCTION_NAME=SungardAS-aws-services-federation-LambdaFunction-CTOAWJSW97XN
*/

var invokingEvent = {
  "configurationItem": {
    "resourceType": "",
    "resourceId": "",
    "configurationItemCaptureTime": ""
  }
};

var event = {
  "account": "",
  "region": "",
  "federateAccount": "",
  "federateRoleName": "",
  "roleName": "",
  "roleExternalId": "",
  "invokingEvent": JSON.stringify(invokingEvent)
}

var i = require('../src/index_sg_portrange_checker.js');
var context = {succeed: res => console.log(res), done: res => console.log(res), fail: res => console.log(res)};
i.handler(event, context, function(err, data) {
  if (err)  console.log("failed : " + err);
  else console.log("completed: " + JSON.stringify(data));
});
