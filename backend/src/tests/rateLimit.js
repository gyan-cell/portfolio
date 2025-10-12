// This is just to test that our basic rate limiter is working just fine

const apiFetch = () => {
  const response = fetch("http://localhost:3000/", {
    method: "GET",
  });
};

for (let i = 0; i < 500; i++) {
  apiFetch();
}
