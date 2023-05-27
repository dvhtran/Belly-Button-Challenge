
# Belly Button Biodiversity Dashboard

This repository contains an interactive dashboard that allows you to explore the Belly Button Biodiversity dataset. The dataset catalogs the microbes that colonize human navels and provides insights into the diversity of microbial species present in different individuals.

# Project Setup

Create a new repository for this project called belly-button-challenge.
Clone the repository to your local machine.
Copy the files from the StarterCode folder contained within the Module 14 Challenge zip file into your local repository. The files include index.html, samples.json, and the static folder.
Note: You will not be required to access the samples.json file locally, but it is provided for reference.
Push the changes to your GitHub repository.
Deploy the repository to GitHub Pages to make the dashboard accessible online.

# Features

The Belly Button Biodiversity Dashboard offers the following features:

Bar Chart: Displays the top 10 operational taxonomic units (OTUs) found in an individual's belly button. The chart uses the sample_values as the values for the bars, otu_ids as the labels for the bars, and otu_labels as the hovertext.

Bubble Chart: Shows each sample from the dataset as a bubble chart. The chart uses otu_ids for the x-axis, sample_values for the y-axis, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.

Sample Metadata: Displays an individual's demographic information as sample metadata. Each key-value pair from the metadata JSON object is shown somewhere on the page.

Dynamic Updates: All the plots and metadata update dynamically when a new sample is selected from the dropdown menu.

Deployment: The app is deployed to GitHub Pages, providing a publicly accessible version of the dashboard.

# Usage

To use the Belly Button Biodiversity Dashboard:

Visit the deployed dashboard at GitHub Pages link.
Explore the top 10 OTUs in an individual's belly button using the bar chart.
Examine the microbial diversity using the bubble chart.
View the demographic information in the sample metadata section.
Select a new sample from the dropdown menu to update all the plots and metadata.

# Development

If you want to modify or enhance the dashboard, follow these steps:

Clone the repository to your local machine.
Make the necessary changes to the files (e.g., index.html, app.js, etc.).
Test your changes locally to ensure everything works as expected.
Push your changes to your GitHub repository.
Redeploy the repository to GitHub Pages to make your updated version available online.

# Resources

The following files are included in the repository:

index.html: The main HTML file that structures the dashboard and includes the necessary JavaScript and CSS files.
samples.json: The dataset file containing the belly button biodiversity data.
static/: A folder containing CSS and JavaScript files for styling and interactivity.

# Credits

The Belly Button Biodiversity Dashboard project is part of an assignment in the data visualization course.
