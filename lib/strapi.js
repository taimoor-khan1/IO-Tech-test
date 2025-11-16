// Strapi CMS API utilities
// Replace with your actual Strapi URL
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchHeroContent(locale = 'en') {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/hero-sections?locale=${locale}&populate=*`,
      { cache: 'no-store' }
    );
    if (!response.ok) throw new Error('Failed to fetch hero content');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return null;
  }
}

export async function fetchTeamMembers(locale = 'en') {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/team-members?locale=${locale}&populate=*`,
      { cache: 'no-store' }
    );
    if (!response.ok) throw new Error('Failed to fetch team members');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return null;
  }
}

export async function fetchClients(locale = 'en') {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/clients?locale=${locale}&populate=*`,
      { cache: 'no-store' }
    );
    if (!response.ok) throw new Error('Failed to fetch clients');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching clients:', error);
    return null;
  }
}

export async function fetchServices(locale = 'en') {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/services?locale=${locale}&populate=*`,
      { cache: 'no-store' }
    );
    if (!response.ok) throw new Error('Failed to fetch services');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return null;
  }
}

export async function subscribeEmail(email) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { email } }),
    });
    if (!response.ok) throw new Error('Failed to subscribe');
    return await response.json();
  } catch (error) {
    console.error('Error subscribing email:', error);
    throw error;
  }
}

export async function searchContent(query, locale = 'en') {
  try {
    // Search team members
    const teamResponse = await fetch(
      `${STRAPI_URL}/api/team-members?locale=${locale}&filters[name][$containsi]=${query}&populate=*`
    );
    const teamData = await teamResponse.json();

    // Search services
    const servicesResponse = await fetch(
      `${STRAPI_URL}/api/services?locale=${locale}&filters[title][$containsi]=${query}&populate=*`
    );
    const servicesData = await servicesResponse.json();

    return {
      team: teamData.data || [],
      services: servicesData.data || [],
    };
  } catch (error) {
    console.error('Error searching content:', error);
    return { team: [], services: [] };
  }
}

