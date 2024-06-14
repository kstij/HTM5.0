// src/contentfulService.js
import axios from 'axios';

const spaceId = 'YOUR_SPACE_ID';
const accessToken = 'YOUR_MANAGEMENT_API_ACCESS_TOKEN';

const apiUrl = `https://api.contentful.com/spaces/${spaceId}/entries`;

const createEntry = async (formData) => {
    try {
        const response = await axios.post(apiUrl, {
            fields: {
                name: { 'en-US': formData.name },
                email: { 'en-US': formData.email },
                phone: { 'en-US': formData.phone },
                institution: { 'en-US': formData.institution },
                // Add more fields as per your Contentful content model
            },
            content_type_id: 'YOUR_CONTENT_TYPE_ID', // Replace with your Content Type ID
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/vnd.contentful.management.v1+json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating entry:', error);
        throw error;
    }
};

export { createEntry };
