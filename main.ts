import { writeText } from "https://deno.land/x/copy_paste/mod.ts";

const startup = async () => {
  const service = prompt("");
  const url = Deno.args[0];
  const key = Deno.args[1];

  if (!url) {
    return console.error("No URL");
  }

  if (!key) {
    return console.error("No key");
  }

  if (!service) {
    return console.error("No service");
  }

  const response = await fetch(url, {
    method: "POST",
    body: `${service}`,
    headers: {
      "x-api-key": key,
    },
  });

  const result = await response.text();

  await writeText(result);
};

startup();
