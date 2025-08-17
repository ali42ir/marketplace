export async function handler(event) {
  try {
    const { phone, code } = JSON.parse(event.body || "{}");
    if (!phone || !code) {
      return { statusCode: 400, body: "phone and code required" };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, mocked: true }) };
  } catch (e) {
    return { statusCode: 500, body: e.message || "error" };
  }
}
