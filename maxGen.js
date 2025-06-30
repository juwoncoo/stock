const maxGen = 25;
const genList = document.getElementById('generation-list');
if (genList) {
  // 현재 페이지가 members 폴더 안인지 체크
  const isInMembersFolder = window.location.pathname.includes('/members/');
  for (let i = maxGen; i >= 1; i--) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'gen-btn';
    // 경로 조정!
    a.href = isInMembersFolder ? `members_${i}.html` : `members/members_${i}.html`;
    a.innerHTML = `<span class="wrap"><span>${i}기</span></span>`;
    if (window.location.href.includes(`members_${i}.html`)) a.classList.add('active');
    li.appendChild(a);
    genList.appendChild(li);
  }
}
