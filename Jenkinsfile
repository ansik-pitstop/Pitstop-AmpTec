pipeline {
    agent {
        docker {
            image 'node:10.16.0-alpine' 
        }
    }

    stages {
        stage('Pre-Build') {
            steps {
                sh 'yarn install'
                sh 'yarn install -g firebase-tools'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Deploy') {
            when {
                branch "master"
            }
            steps {
                 sh 'firebase deploy --token=$FIREBASE_DEPLOY_TOKEN'
            }
        }
    }
}