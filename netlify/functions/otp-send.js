export async function handler(event) {
  try {
    const { phone } = JSON.parse(event.body || "{}");
    if (!phone) {
      return { statusCode: 400, body: "phone required" };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, mocked: true }) };
  } catch (e) {
    return { statusCode: 500, body: e.message || "error" };
  }
}
