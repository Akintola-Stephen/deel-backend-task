import { Profile } from "../model/index.js";

/**
 * Retrieves a user's profile based on a profile ID from the request headers.
 * If the profile ID is missing or invalid, responds with a 401 status.
 * If the profile is found, attaches the profile to the request object and proceeds to the next middleware.
 * @param {object} req - The HTTP request object, expected to contain a 'profile_id' header.
 * @param {object} res - The HTTP response object, used to send back status codes.
 * @param {function} next - The next middleware function in the stack.
 */
const getProfile = async (req, res, next) => {
    const profileId = req.get('profile_id');

    if (!profileId) {
        return res.status(401).end();
    }

    try {
        const profile = await Profile.findOne({ where: { id: profileId } });

        if (!profile) {
            return res.status(401).end();
        }

        req.profile = profile;
        next();
    } catch (error) {
        console.error('Error retrieving profile:', error);
        res.status(500).end();
    }
};

export { getProfile };
