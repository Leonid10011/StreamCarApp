export function getUserIdFromToken(token) {
    if (!token) {
        throw new Error("Token is required");
    }

    // Split the token into its parts
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error("Invalid token format");
    }

    // Decode the payload (the second part)
    const payload = parts[1];
    const decodedPayload = atob(payload.replace(/_/g, '/').replace(/-/g, '+'));

    // Parse the JSON
    const payloadObject = JSON.parse(decodedPayload);

    // Extract the userId
    const userId = payloadObject.userId;
    if (!userId) {
        throw new Error("userId not found in token");
    }

    return userId;
}
