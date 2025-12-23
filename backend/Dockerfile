FROM eclipse-temurin:24-jdk
WORKDIR /app
COPY . .
RUN chmod +x gradlew
EXPOSE 8000
CMD ["./gradlew", "bootRun"]
