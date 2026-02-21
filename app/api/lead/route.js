export async function POST(req) {
  try {
    const payload = await req.json();

    const endpoint = process.env.FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    // Basic validation
    if (!payload?.name || !payload?.phone || !payload?.details) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    // If you set FORMSPREE_ENDPOINT, we forward the lead there.
    if (endpoint) {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          _subject: `New estimate request — ${payload.service || "Website"}`,
          _replyto: payload.email || "",
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        return Response.json({ error: "Lead service rejected the request.", detail: text }, { status: 502 });
      }

      return Response.json({ ok: true });
    }

    // Fallback: no lead endpoint set.
    return Response.json({
      ok: true,
      note: "No FORMSPREE_ENDPOINT set. Set it in .env.local to receive submissions."
    });
  } catch (e) {
    return Response.json({ error: "Server error." }, { status: 500 });
  }
}
