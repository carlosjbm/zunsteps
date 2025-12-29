const fs = require("fs");
export const writeInUnKnowTopics = (unknowTopic) => {
  fs.appendFileSync(
    `topics-to-train.txt`,
    `Es necesario indagar sobre :${unknowTopic}\n`
  );
};
