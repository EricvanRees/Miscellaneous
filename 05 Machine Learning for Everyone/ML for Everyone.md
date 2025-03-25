# What is Machine Learning?
Machine learning is a subdomain of computer science that focuses on algorithms which help a computer learn from eata without explicit programming.

# AI vs Machine Learning vs Data Science
Artificial intelligence is an area of computer science, where the goal is to enable computers and machines to perform human-like tasks and simulate human behavior.

Machine learning is subset of AI that tries to solve a specific problem and make predictions using data.

Data science is a field that attempts to find patterns and draw insights from data (might use ML!).

All fields overlap! All may use ML!

# Types of Machine Learning

1) Supervised learning - uses labeled inputs (meaning the input has a corresponding output label) to train models and learn outputs.

2) Unsupervised learning - uses unlabeled data to learn about patterns in data.

3) Reinforcement learning - agent learning in interactive environment based on rewards and penalties.

# Supervised Learning

**Features**
1) Qualitative - categorical data (finite number of categories or groups)

Nominal data (no inherent order)

Nominal data is fed into a model using ONE-HOT ENCODING:

USA  - [1,0,0,0]
India - [0,1,0,0]
Canada - [0,0,1,0]
France - [0,0,0,1]

2) Qualitative - categorical data (finite number of categories or groups)

Ordinal data (inherent order)

3) Quantitative - numerical valued data (could be discrete or continuous)

length = continuous
integers = discrete

# Supervised Learning Tasks

1) Classification - predict discrete classes 
   
"this is a hotdog/pizza/icecream", cat/dog/lizard/dolphin, orange/apple/pear, plant species = multiclass classification

"this is a hotdog / not a hotdog", positive/negative, cat/dog, spam/npam = binary classification

2) Regression - predict continuous values

examples: the price of Ethereum tomorrow, temperature, housing prices

# How do we make the model learn? How can we tell whether or not it's learning?

Training the model = rows of training dataset are fed into a model. Model will make some kind of prediction and that is compared later with the actual value, so the model can be adjusted to make better predictions.

A single supervised learning dataset is broken into three types of datasets:
1) Training dataset
2) Validation dataset
3) Testing dataset

"Loss" = the difference between the prediction and the true value 

"training" = after calculating the loss value, adjustments are made to the model

Next, validation set is used as a reality check during/after training to ensure model can handle unseen data

The training step is not present here, the loss calculation is never fed back into the model. 

Next, a test set is used as to check how generalizable the final chosen model is. 

# Metrics of Performance

**Loss functions**

L1 Loss
loss = sum(|y real - y predicted|)

L2 Loss
loss = sum((y real - y predicted)**2)

Binary Cross-Entropy Loss
loss = 1/N*sum(y real * log(y predicted)+(1-y real)*log((1-y predicted)))

(You just need to now that loss decreases as the performance gets better)

**Accuracy**



