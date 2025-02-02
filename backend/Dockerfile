# 베이스 이미지
FROM openjdk:17-jdk-slim

# 작업 디렉토리 설정
WORKDIR /app

# Gradle Wrapper 관련 파일 먼저 복사
COPY backend/gradlew backend/gradlew.bat backend/gradle /app/
RUN chmod +x /app/gradlew  # 실행 권한 부여

# 나머지 프로젝트 파일 복사
COPY backend /app

# Gradle 빌드 실행
RUN /app/gradlew bootJar

# 실행할 JAR 파일
CMD ["java", "-jar", "/app/build/libs/backend-0.0.1-SNAPSHOT.jar"]

# 컨테이너에서 사용할 포트
EXPOSE 8080
