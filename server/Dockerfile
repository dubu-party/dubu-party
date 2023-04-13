FROM openjdk:11-jdk
LABEL maintainer="dubu"
ARG JAR_FILE= build/libs/server-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} dubu-party.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/dubu-party.jar"]
EXPOSE 8080

# FROM openjdk:11-jdk
# jdk 11 버전을 사용합니다.

# LABEL maintainer="dubu"
# maintainer 라벨을 추가합니다.

# ARG JAR_FILE= server/build/libs/dubu-0.0.1-SNAPSHOT.jar
# ARG = 빌드 시점에만 사용되는 변수입니다.


# COPY ${JAR_FILE} dubu-party.jar
# COPY = 파일을 이미지에 추가합니다.
# COPY <src> <dest>
# 이미지를 빌드할 때, build/libs/dubu-0.0.1-SNAPSHOT.jar 파일을 dubu-party.jar 파일로 복사합니다.
# dubu-party.jar 파일의 위치는 이미지의 루트 디렉토리에 있습니다.

# ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","dubu-party.jar"]
# ENTRYPOINT = 컨테이너가 시작될 때 실행될 명령어를 지정합니다.

# EXPOSE 8080
# EXPOSE = 컨테이너가 사용하는 포트를 지정합니다.
# 8080 포트를 사용합니다.


