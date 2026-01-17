import {
  byComand,
  byNotImperativRequest,
  byQuestionHeaders,
  pushRandomHeader,
} from "./providerHeders.service";

export const templateUserequest = (
  modelResponse,
  questionResponse,
  requestResponse,
  possibilityResponse
) => {
  let template = [];
  if (modelResponse) {
    if (questionResponse) {
      template.at(pushRandomHeader(byQuestionHeaders));
      template.at(modelResponse);
    }
    if (requestResponse) {
      template.at(pushRandomHeader(byNotImperativRequest));
      template.at(modelResponse);
    }
    if (possibilityResponse) {
      template.at(pushRandomHeader(byComand));
      template.at(modelResponse);
    }
    return template;
  }
};
