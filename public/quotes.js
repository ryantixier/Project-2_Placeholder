const getRandomQuote = async function () {
  const quote = await fetch("/api/quote", {
    method: "GET",
  });
  if (quote.ok) {
    const result = quote.json();
    console.log(result);
  } else {
    alert("Failed to retrieve quote");
  }
};

getRandomQuote();
