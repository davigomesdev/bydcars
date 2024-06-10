//colors imports
import {
	neutralTheme,
	purpleTheme,
	greenLemonTheme,
	bluishGreenTheme,
	graphicLineTheme,
} from './colors';

//fonts imports
import { family, weight, size } from './fonts';

//utils imports
import { dimensions, opacity, zIndices } from './utils';

export const theme = {
	colors: {
		neutralTheme,
		purpleTheme,
		greenLemonTheme,
		bluishGreenTheme,
		graphicTheme: graphicLineTheme,
	},
	font: { family, weight, size },
	utils: {
		dimensions,
		opacity,
		zIndices,
	},
};
