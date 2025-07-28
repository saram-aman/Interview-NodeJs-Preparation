# AWS Deep-Dive Interview Preparation

This document provides an in-depth overview of key AWS services and DevOps tools, with advanced concepts and sample interview questions for technical interviews. Topics include ECS, EC2, Glue Jobs, Step Functions, Lambda, S3, Elasticsearch, CloudWatch, Docker, and Terraform.

---

## 1. Amazon ECS (Elastic Container Service)

### Overview
Amazon ECS is a fully managed container orchestration service that supports Docker containers and allows you to run and scale containerized applications on AWS.

### Key Concepts
- **Clusters:** Logical grouping of tasks or services.
- **Tasks & Task Definitions:** Blueprint for running containers, including image, CPU, memory, networking, and IAM roles.
- **Services:** Maintain desired number of running tasks, support load balancing and auto-scaling.
- **Launch Types:** EC2 (self-managed) and Fargate (serverless).
- **Networking:** VPC, subnets, security groups, service discovery.

### Advanced Topics
- **Blue/Green Deployments:** Zero-downtime deployments using CodeDeploy.
- **Service Auto Scaling:** Adjusts task count based on metrics.
- **Task Placement Strategies:** Binpack, random, spread.
- **Integration:** With ALB/NLB, CloudWatch, IAM, and CI/CD pipelines.

### Sample Interview Questions
- **Q:** How does ECS differ from EKS and Fargate?
  - **A:** ECS is AWS-native, EKS is Kubernetes-based. Fargate is a serverless compute engine for ECS/EKS, removing server management.
- **Q:** How do you secure ECS workloads?
  - **A:** Use IAM roles for tasks, security groups, VPC isolation, and secrets management (SSM, Secrets Manager).

---

## 2. Amazon EC2 (Elastic Compute Cloud)

### Overview
EC2 provides resizable compute capacity in the cloud, allowing you to launch and manage virtual servers (instances).

### Key Concepts
- **Instance Types:** General, compute, memory, storage optimized.
- **AMI (Amazon Machine Image):** Pre-configured OS and software.
- **EBS (Elastic Block Store):** Persistent block storage for instances.
- **Security Groups:** Virtual firewalls for instances.
- **Elastic IPs:** Static public IP addresses.

### Advanced Topics
- **Auto Scaling Groups:** Automatically adjust instance count based on demand.
- **Spot Instances:** Use spare capacity at reduced cost.
- **Placement Groups:** Control instance placement for low latency/high throughput.
- **User Data & Metadata:** Bootstrap scripts and instance info.

### Sample Interview Questions
- **Q:** How do you ensure high availability for EC2 workloads?
  - **A:** Use multiple Availability Zones, Auto Scaling Groups, Elastic Load Balancer, and health checks.
- **Q:** What are the differences between EBS and instance store volumes?
  - **A:** EBS is persistent and can be detached; instance store is ephemeral and lost on stop/terminate.

---

## 3. AWS Glue Jobs

### Overview
AWS Glue is a serverless data integration service for ETL (Extract, Transform, Load) operations.

### Key Concepts
- **Jobs:** Scripts (Python/Spark) for ETL tasks.
- **Crawlers:** Discover and catalog data sources.
- **Data Catalog:** Central metadata repository.
- **Triggers:** Schedule or event-driven job execution.
- **Connections:** Secure access to data stores.

### Advanced Topics
- **Job Bookmarks:** Track processed data for incremental ETL.
- **Dynamic Frames:** Flexible data structures for semi-structured data.
- **Partitioning:** Optimize query performance and cost.
- **Glue Studio:** Visual job authoring and monitoring.

### Sample Interview Questions
- **Q:** How do Glue Jobs handle schema evolution?
  - **A:** Glue supports schema inference, versioning, and can handle evolving schemas using dynamic frames and the Data Catalog.
- **Q:** What are Glue job bookmarks?
  - **A:** Bookmarks track processed data, enabling incremental ETL and preventing duplicate processing.

---

## 4. AWS Step Functions

### Overview
Step Functions orchestrate distributed applications and microservices using visual workflows.

### Key Concepts
- **State Machines:** Define workflow as a series of states (tasks, choices, parallel, wait, etc.).
- **Tasks:** Invoke Lambda, ECS, Glue, or other AWS services.
- **Input/Output Processing:** Pass data between steps.
- **Error Handling:** Retry, catch, fallback states.

### Advanced Topics
- **Express Workflows:** For high-volume, short-duration workflows.
- **Integration Patterns:** Service integrations, callback patterns, dynamic parallelism.
- **Monitoring:** CloudWatch metrics, execution history, logging.

### Sample Interview Questions
- **Q:** How do Step Functions improve microservice orchestration?
  - **A:** They provide visual, auditable workflows, error handling, retries, and integration with many AWS services.
- **Q:** What is the difference between Standard and Express workflows?
  - **A:** Standard is for long-running, durable workflows; Express is for high-throughput, short-duration tasks.

---

## 5. AWS Lambda

### Overview
Lambda is a serverless compute service that runs code in response to events and automatically manages compute resources.

### Key Concepts
- **Functions:** Stateless code, triggered by events (S3, API Gateway, etc.).
- **Runtimes:** Multiple languages supported (Node.js, Python, Java, etc.).
- **Event Sources:** S3, DynamoDB, Kinesis, SNS, SQS, API Gateway.
- **Concurrency:** Reserved, provisioned, and on-demand.

### Advanced Topics
- **Layers:** Share code and dependencies across functions.
- **VPC Integration:** Access private resources securely.
- **Cold Starts:** Latency when initializing new execution environments.
- **Monitoring:** CloudWatch logs, X-Ray tracing.

### Sample Interview Questions
- **Q:** How do you optimize Lambda cold start times?
  - **A:** Use provisioned concurrency, minimize package size, use lighter runtimes, and keep functions warm with scheduled events.
- **Q:** How do you secure Lambda functions?
  - **A:** Use least-privilege IAM roles, environment variable encryption, VPC, and restrict network access.

---

## 6. Amazon S3 (Simple Storage Service)

### Overview
S3 is an object storage service for storing and retrieving any amount of data at scale.

### Key Concepts
- **Buckets:** Containers for objects.
- **Objects:** Files and metadata.
- **Storage Classes:** Standard, Intelligent-Tiering, Glacier, etc.
- **Versioning:** Track object changes over time.
- **Lifecycle Policies:** Automate data transitions and deletions.

### Advanced Topics
- **Event Notifications:** Trigger Lambda, SNS, SQS on object events.
- **Cross-Region Replication:** Disaster recovery and geo-redundancy.
- **Access Control:** Bucket policies, ACLs, IAM policies.
- **Encryption:** SSE-S3, SSE-KMS, client-side.

### Sample Interview Questions
- **Q:** How do you secure data in S3?
  - **A:** Use encryption, bucket policies, IAM, block public access, and enable logging for audit trails.
- **Q:** What is S3 versioning and why use it?
  - **A:** Versioning keeps multiple variants of objects, enabling recovery from accidental deletions or overwrites.

---

## 7. Amazon Elasticsearch Service (OpenSearch)

### Overview
Managed service for deploying, operating, and scaling Elasticsearch clusters in the cloud.

### Key Concepts
- **Domains:** Managed Elasticsearch clusters.
- **Indices:** Logical data partitions.
- **Shards & Replicas:** Data distribution and redundancy.
- **Ingestion:** Logstash, Beats, direct API.
- **Kibana:** Visualization and analytics.

### Advanced Topics
- **Security:** Fine-grained access control, encryption, VPC endpoints.
- **Scaling:** Auto-scaling, hot/warm/cold storage tiers.
- **Snapshot & Restore:** Backup and disaster recovery.
- **Alerting:** Monitor data and trigger actions.

### Sample Interview Questions
- **Q:** How do you secure an Elasticsearch domain?
  - **A:** Use VPC endpoints, fine-grained access control, encryption at rest/in transit, and audit logging.
- **Q:** What are shards and replicas in Elasticsearch?
  - **A:** Shards split data for scalability; replicas provide redundancy and improve search performance.

---

## 8. Amazon CloudWatch

### Overview
CloudWatch provides monitoring, observability, and alerting for AWS resources and applications.

### Key Concepts
- **Metrics:** Collect and visualize resource and application metrics.
- **Logs:** Centralized log collection and analysis.
- **Alarms:** Trigger actions based on metric thresholds.
- **Dashboards:** Custom visualizations.

### Advanced Topics
- **Custom Metrics:** Publish application-specific metrics.
- **Log Insights:** Query and analyze logs interactively.
- **Anomaly Detection:** Machine learning-based metric analysis.
- **Integration:** With Lambda, SNS, Auto Scaling, etc.

### Sample Interview Questions
- **Q:** How do you use CloudWatch for troubleshooting?
  - **A:** Analyze logs, set up alarms, use dashboards, and correlate metrics to identify and resolve issues.
- **Q:** What is the difference between CloudWatch metrics and logs?
  - **A:** Metrics are numeric time-series data; logs are unstructured event data for deeper analysis.

---

## 9. Docker

### Overview
Docker is a platform for developing, shipping, and running applications in containers.

### Key Concepts
- **Images:** Immutable application blueprints.
- **Containers:** Running instances of images.
- **Dockerfile:** Script to build images.
- **Volumes:** Persistent storage for containers.
- **Networking:** Bridge, host, overlay networks.

### Advanced Topics
- **Multi-stage Builds:** Optimize image size and security.
- **Docker Compose:** Define multi-container applications.
- **Image Security:** Scanning, signing, and best practices.
- **Integration:** With ECS, EKS, CI/CD pipelines.

### Sample Interview Questions
- **Q:** How do you optimize Docker images for production?
  - **A:** Use multi-stage builds, minimal base images, remove unnecessary files, and scan for vulnerabilities.
- **Q:** How does Docker networking work?
  - **A:** Provides isolated networks for containers, supports bridge, host, and overlay modes for different use cases.

---

## 10. Terraform

### Overview
Terraform is an open-source Infrastructure as Code (IaC) tool for provisioning and managing cloud resources declaratively.

### Key Concepts
- **Providers:** Plugins for AWS, Azure, GCP, etc.
- **Resources:** Declarative blocks for infrastructure components.
- **State Files:** Track resource state and dependencies.
- **Modules:** Reusable infrastructure components.
- **Variables & Outputs:** Parameterize and expose values.

### Advanced Topics
- **Remote State:** Store state in S3, enable team collaboration.
- **Workspaces:** Manage multiple environments (dev, prod).
- **Lifecycle Rules:** Control resource creation, update, and deletion.
- **Provisioners:** Run scripts during resource creation.

### Sample Interview Questions
- **Q:** How does Terraform manage resource dependencies?
  - **A:** Uses a dependency graph, implicit and explicit references, and state files to ensure correct resource creation order.
- **Q:** What are the benefits of using remote state in Terraform?
  - **A:** Enables collaboration, state locking, and disaster recovery for team-based infrastructure management. 