import { hi } from "@my-org/some-lib/index";

class TestClass {
  magic: string;
  constructor() {
    this.magic = `magic =`;
  }
}

export const hello = async (event) => {
  const a = new TestClass();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${hi('Sandy')} ${a.magic} Your function executed successfully!`,
      input: event,
    }),
  };
};
