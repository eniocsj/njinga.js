const { styling } =    require('../settings/utils');
const success     =    styling.whiteBright.bold.bgGreenBright(' Success ');
const warning     =    styling.black.bold.bgYellowBright(' Warning ');
const error       =    styling.whiteBright.bold.bgRedBright(' Error ');

exports.successMessage = message => console.log(
	`${ success }\t${ message }\n`
);
exports.warningMessage = message => console.log(
	`${ warning }\t${ message }\n`
);
exports.errorMessage = message => console.log(
	`${ error }\t\t${ message }\n`
);