window.addEventListener("DOMContentLoaded", () => {
  // 星を表示するための親要素を取得
  const stars = document.querySelector(".stars")!;

  // 星を生成する関数
  const createStar = () => {
    const starElement = document.createElement("span");
    starElement.className = "star";
    // 星の最小サイズを指定
    const minSize = 1; 
    // 星の最大サイズを指定
    const maxSize = 2;
    // 星のサイズをランダムに出す
    const size = Math.random() * (maxSize - minSize) + minSize;
    // sizeにはランダムに数字が入る
    starElement.style.width = `${size}px`;
    starElement.style.height = `${size}px`;
    // 0〜100のランダムな数,星の位置がランダムに
    starElement.style.left = `${Math.random() * 100}%`;
    starElement.style.top = `${Math.random() * 100}%`;
    // 光るタイミングをズラす
    starElement.style.animationDelay = `${Math.random() * 10}s`;
    // 親要素の中に入れる
    stars.appendChild(starElement);
  };

  // for文で星を生成する関数を指定した回数呼び出す
  // 500回繰り返す
  // 星500個生成
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});
