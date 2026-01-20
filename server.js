const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/download", (req, res) => {
    const url = req.body.url;
    if (!url) return res.status(400).send("No URL");

    const cmd = `yt-dlp -f mp4 -o - "${url}"`;

    const proc = exec(cmd, { maxBuffer: 1024 * 1024 * 100 });

    res.setHeader("Content-Disposition", "attachment; filename=video.mp4");
    res.setHeader("Content-Type", "video/mp4");

    proc.stdout.pipe(res);
    proc.stderr.on("data", () => {});
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
