FROM openjdk:11-jdk 
# Use the official image as a parent image

COPY build/libs/server-0.0.1-SNAPSHOT.jar app.jar 
# Copy the jar file to the image

ENTRYPOINT ["java","-jar","app.jar","--spring.config.name=application-prod"] 
# Run the jar file


EXPOSE 3333
# Expose port 3333 to the host


