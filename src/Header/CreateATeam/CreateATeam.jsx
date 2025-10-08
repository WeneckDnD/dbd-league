import { useState } from 'react';
import './styleTeamCreation.css'

export default function CreateTeam() {
    const [teamData, setTeamData] = useState({
        name: '',
        shortcut: '',
        captain: '',
        teamMembers: [''],
        steamTag: [''],
        psTag: [''],
        xboxTag: [''],
        picture: '',
        note: ''
    });

    const handleInputChange = (field, value) => {
        setTeamData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleMemberChange = (index, value) => {
        const updatedMembers = [...teamData.teamMembers];
        updatedMembers[index] = value;
        setTeamData(prev => ({
            ...prev,
            teamMembers: updatedMembers
        }));
    };

    const addMember = () => {
        setTeamData(prev => ({
            ...prev,
            teamMembers: [...prev.teamMembers, '']
        }));
    };

    const removeMember = (index) => {
        const updatedMembers = teamData.teamMembers.filter((_, i) => i !== index);
        setTeamData(prev => ({
            ...prev,
            teamMembers: updatedMembers
        }));
    };

    const handleSubmit = () => {
        console.log('Team Data:', teamData);
        // Handle form submission here
    };

    return (
        <section>
            <div className='create-team-container'>
                <h2 className='create-team-title'>Create Team</h2>
                <div className='form-container'>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="name">Team Name:</label>
                        <input
                            className='form-input'
                            type="text"
                            id="name"
                            value={teamData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label className='form-label' htmlFor="shortcut">Shortcut:</label>
                        <input
                            className='form-input'
                            type="text"
                            id="shortcut"
                            value={teamData.shortcut}
                            onChange={(e) => handleInputChange('shortcut', e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label className='form-label' htmlFor="captain">Captain:</label>
                        <input
                            className='form-input'
                            type="text"
                            id="captain"
                            value={teamData.captain}
                            onChange={(e) => handleInputChange('captain', e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Team Members:</label>
                        <div className='members-section'>
                            {teamData.teamMembers.map((member, index) => (
                                <div key={index} className='member-item'>
                                    <input
                                        className='member-input'
                                        type="text"
                                        value={member}
                                        onChange={(e) => handleMemberChange(index, e.target.value)}
                                        placeholder="Discord username"
                                    />
                                    {teamData.teamMembers.length > 1 && (
                                        <button
                                            className='remove-member-btn'
                                            type="button"
                                            onClick={() => removeMember(index)}
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button className='add-member-btn' type="button" onClick={addMember}>
                                Add Member
                            </button>
                        </div>
                    </div>

                    <div className='gaming-tags'>
                        <div className='form-group'>
                            <label className='form-label' htmlFor="steamTag">Steam Tag:</label>
                            <input
                                className='form-input'
                                type="text"
                                id="steamTag"
                                value={teamData.steamTag}
                                onChange={(e) => handleInputChange('steamTag', e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label className='form-label' htmlFor="psTag">PlayStation Tag:</label>
                            <input
                                className='form-input'
                                type="text"
                                id="psTag"
                                value={teamData.psTag}
                                onChange={(e) => handleInputChange('psTag', e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label className='form-label' htmlFor="xboxTag">Xbox Tag:</label>
                            <input
                                className='form-input'
                                type="text"
                                id="xboxTag"
                                value={teamData.xboxTag}
                                onChange={(e) => handleInputChange('xboxTag', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label className='form-label' htmlFor="picture">Picture URL:</label>
                        <input
                            className='form-input'
                            type="url"
                            id="picture"
                            value={teamData.picture}
                            onChange={(e) => handleInputChange('picture', e.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='form-label' htmlFor="note">Note (About Team):</label>
                        <textarea
                            className='form-textarea'
                            id="note"
                            value={teamData.note}
                            onChange={(e) => handleInputChange('note', e.target.value)}
                            rows="4"
                            cols="50"
                        />
                    </div>

                    <div className='action-buttons'>
                        <button className='submit-btn' onClick={handleSubmit}>Create Team</button>
                        <button className='reset-btn' onClick={() => setTeamData({
                            name: '',
                            shortcut: '',
                            captain: '',
                            teamMembers: [''],
                            steamTag: '',
                            psTag: '',
                            xboxTag: '',
                            picture: '',
                            note: ''
                        })}>
                            Reset Form
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}