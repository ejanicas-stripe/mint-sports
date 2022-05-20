# Getting Started with Stripe on AWS

This project's frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and its backend with [AWS Serverless Application Model](https://aws.amazon.com/serverless/sam/).

## Pre Requisites
- AWS Account
- Stripe Account

## Running this demo

In the project directory, you can run:

### Set up your product catalog
1. Run `./setup.sh` to link your Stripe account and setup 4 test products in your account
```bash
./setup.sh
```
### Spin up the backend

2. [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

3. On the `/backend` folder, deploy the sample application:
```bash
cd backend
sam build
sam deploy --guided
cd ..
```

4. The first command will build the source of your application. The second command will package and deploy your application to AWS, with a series of prompts you need to fill:

* **Stack Name**: The name of the stack to deploy to CloudFormation. This should be unique to your account and region, and a good starting point would be something matching your project name.
* **AWS Region**: The AWS region you want to deploy your app to.
* **Confirm changes before deploy**: If set to yes, any change sets will be shown to you before execution for manual review. If set to no, the AWS SAM CLI will automatically deploy application changes.
* **Allow SAM CLI IAM role creation**: Many AWS SAM templates, including this example, create AWS IAM roles required for the AWS Lambda function(s) included to access AWS services. By default, these are scoped down to minimum required permissions. To deploy an AWS CloudFormation stack which creates or modifies IAM roles, the `CAPABILITY_IAM` value for `capabilities` must be provided. If permission isn't provided through this prompt, to deploy this example you must explicitly pass `--capabilities CAPABILITY_IAM` to the `sam deploy` command.
* **Save arguments to samconfig.toml**: If set to yes, your choices will be saved to a configuration file inside the project, so that in the future you can just re-run `sam deploy` without parameters to deploy changes to your application.

You can find your API Gateway Endpoint URL in the output values displayed after deployment. **Note of this endpoint**

### Launch the frontend

5. **Set up Environment Variables**

Your project consumes variables declared in your environment as if they were declared locally in your JS files. By default you will have `NODE_ENV` defined for you, and any other environment variables starting with `REACT_APP_`.

First configure the environment variables:

Inside the repository you will find an example for your .env file. Make a copy of .env.example at the same level and rename it to .env.

For example:

```
cp .env.example frontend/.env
```
Replace the placeholder variable in the .env file with your API Gateway Endpoint URL from step 2:

```
REACT_APP_SERVER_URL=<replace-with-your-server-url>
```

6. On the `/frontend` folder, run `npm install`
```bash
cd frontend
npm install
```

Installs the dependencies in the local `node_modules` folder

7. Finally, run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
