---
title: "[centos] yum install 오류"
categories:
  - post
tags:
  - centos
  - yum
  - install
  - error
---

OS : centos 6.4

mysql 백업 방식 변경을 위해 yum을 통해 xtrabackup을 설치하던 도중 발생한 오류. 그리고 해결 방법을 정리한다.

```
yum install percona-xtrabackup-24
```

발생한 에러는 아래와 같다.

```
http://~~~~~~~~~~~~~~~~/~~~~~/repodata/repomd.xml: [Errno 12] Timeout on 
http://~~~~~~~~~~~~~~~~/~~~~~/repodata/repomd.xml: (28, 'connect() timed out!')
``` 

해당 도메인에 ping 날려봐도 정상이였고
IDC의 방화벽 설정을 확인해봤지만 별 문제가 없는것 같았다.

일단 연결의 문제는 아닌 듯 보였고, 
다른 클라우드 서버의 설정과 비교 해 보기로 했다.

host파일이랑 dns설정 등을 비교해보고 맞춰 봐도 해결이 안됐다.
 
그 후 한참이 지나 발견 한 문제는 다음과 같았다.

정상적으로 설치가 되는 서버 쪽에는 /etc/yum.repos.d 경로에 CentOS-Base.repo.org 와 CentOS-Base.repo 가 존재 했지만 
동작하지 않는 쪽에는 CentOS-Base.repo.org 파일만 존재 했고, 이걸 복사해서 CentOS-Base.repo 파일을 생성 했더니 문제가 해결 되었다.

결론적으로 저장소 설정파일이 존재 하지 않아 동작하지 않았던 것으로 보인다.

이것이 원래부터 없었는지 다른 사용자가 설정을 바꿔놓은것인지는 파악되지 않는다.

어쨌든 해결...
