FROM maven:3.8.7-openjdk-18-slim as builder
WORKDIR /api
ADD . .
RUN  mvn package

FROM eclipse-temurin:17.0.11_9-jdk-ubi9-minimal
WORKDIR /api
COPY  --from=builder /app/target/*.jar /app/api.jar
CMD [ "java", "-jar", "api.jar"]