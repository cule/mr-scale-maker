// https://gist.github.com/lanqy/5193417
function bytesToSize(bytes) {
  const sizes = ["bytes", "kb", "mb", "gb", "tb"];
  if (bytes === 0) return "n/a";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]})`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

export default bytesToSize;
