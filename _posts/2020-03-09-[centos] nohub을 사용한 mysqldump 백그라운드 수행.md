---
title: "[centos] nohub을 사용한 mysqldump 백그라운드 수행"
categories:
  - post
tags:
  - centos
  - nohup
  - mysqldump
---

남들은 다 아는 간단하지만 나만 몰랐던 내용. 기록해 놓자.
mysqldump 명령어로 백업된 파일을 복구할 때 주로 터미널을 사용한다.
터미널을 끄거나, 내가 사용하는 맥을 잠자기 해 놓으면 세션이 끊긴다...  

이걸 막을 방법을 찾아 보니 역시나 다 방법이 있었다.

```
nohup mysql -u사용자명 -p패스워드 DB명 < dump.sql & 
```

이렇게 수행하면, 실행된 뒤 PID를 알려주고 터미널을 꺼도 백그라운드에서 프로세스가 완료 될 때까지 수행된다.
그리고 nohup.out 파일에 로그가 찍한다.

프로세스를 종료시키기 위해선 아래 명령어로..
 
```
kill -9 PID 
```

끝.