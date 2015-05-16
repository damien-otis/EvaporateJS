var crypto = require('crypto');
var secret = 'YOUR_AWS_SECRET_KEY';

exports.handler = function(event, context) {
    if (!event.to_sign) {
        context.fail('Missing to_sign param');
        return;
    }
    context.succeed(
        crypto.createHmac('sha1', secret)
            .update(event.to_sign)
            .digest('base64')
    );
};
