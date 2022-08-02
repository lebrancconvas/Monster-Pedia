import chalk from 'chalk';

export default class Logging {
	public static log = (args: any) => this.info(args);

	// Info Logging. 
	public static info = (args: any) => {
		console.log(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.blueBright(args) : args);
	}

	// Warning Logging. 
	public static warning = (args: any) => {
		console.log(chalk.yellow(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.yellowBright(args) : args);
	}

	// Error Logging. 
	public static error = (args: any) => {
		console.log(chalk.red(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.redBright(args) : args);
	}
}