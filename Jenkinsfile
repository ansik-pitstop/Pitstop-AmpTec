pipeline {
    agent {
        label 'staging'
        docker {
            image 'node:10.16.0-alpine' 
            args '-p 3000:3000' 
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing.....'
            }
        }
        stage('Deploy') {
            when {
                branch "master"
            }
            steps {
                echo 'Deploying....'
            }
        }
    }
}