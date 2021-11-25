pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }
    
    stages {

        stage('stop then remove container and image') {
            steps {
                script {
                    def imageExists = sh(script: 'docker images -q frontend', returnStdout: true) == ""
                    println imageExists

                    if( !imageExists ){
                           sh 'docker stop frontend'
                           sh 'docker rm frontend'
                           sh 'docker image rm frontend'
                    }else {
                        echo 'Skip this stage '
                    }
                }
            }
        }

        stage('remove all data') {
            steps {
                sh 'rm -rf *'
            }
        }

        stage('git clone') {
            steps {
                git branch: 'master',
                    credentialsId: 'INT222jenkins',
                    url: 'https://github.com/INT222IntegratedProject/front-end.git'
            }
        }

        stage('start contianer') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        
        stage('test') {
            steps {
                sh 'node --version '
                sh 'npm --version '
                sh 'npm install -g newman'
                sh 'newman run https://www.getpostman.com/collections/a2c2eae56c1a211ad4e0'
            }
        }

    }
}
