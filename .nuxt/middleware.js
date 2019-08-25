const middleware = {}

middleware['firebase'] = require('../middleware/firebase.js');
middleware['firebase'] = middleware['firebase'].default || middleware['firebase']

export default middleware
