# jarvis-ai-assistant
My Personal JARVIS Voice Assistant
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JARVIS AI</title>

<style>
body {
  background: #050b18;
  color: #00eaff;
  font-family: Arial;
  text-align: center;
  padding: 30px;
}
h1 {
  font-size: 38px;
  margin-top: 60px;
}
button {
  background: #00cfff;
  color: black;
  padding: 18px 35px;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  margin-top: 30px;
}
#output {
  margin-top: 30px;
  color: white;
}
</style>
</head>

<body>

<h1>J.A.R.V.I.S</h1>
<p>Personal Voice Assistant</p>

<button onclick="startJarvis()">🎤 TALK TO JARVIS</button>

<div id="output">Waiting for your command...</div>

<script src="script.js"></script>

</body>
</html>
