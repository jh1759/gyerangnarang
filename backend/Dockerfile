# 최신 Maven + OpenJDK 17 이미지 사용
FROM maven:3.9.5-eclipse-temurin-17 AS build

# 작업 디렉토리 설정
WORKDIR /app

# 소스 코드 복사
COPY . .

# Maven으로 프로젝트 빌드 (테스트 제외)
RUN mvn clean package -DskipTests

# 런타임 환경을 위한 JDK 이미지 사용
FROM openjdk:17-jdk-slim

# 작업 디렉토리 설정
WORKDIR /app

# 빌드된 JAR 파일 복사
COPY --from=build /app/target/*.jar app.jar

# 실행 명령어
CMD ["java", "-jar", "app.jar"]

# 컨테이너에서 사용할 포트
EXPOSE 8080
