FROM eclipse-temurin:17-jdk-alpine
LABEL authors="gian"
WORKDIR /app
COPY target/Ecommerce-0.0.1-SNAPSHOT.jar Ecommerce-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java","-jar","Ecommerce-0.0.1-SNAPSHOT.jar"]