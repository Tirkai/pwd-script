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
    body: `${key}:${service}`,
  });

  const result = await response.text();

  console.log(result);

  prompt("")
};

startup();
