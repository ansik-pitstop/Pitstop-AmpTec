pipeline {
    agent {
        docker {
            image 'node:10.16.0-alpine' 
            args '-u root'
        }
    }

    stages {
        stage('Pre-Build') {
            steps {
                sh 'yarn global add firebase-tools  --unsafe-perm'
                sh 'yarn install'
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
    post {
        always {
            deleteDir() /* clean up our workspace */
        }
    }
}