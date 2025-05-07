type ProfileCardProps = {
    name: string;
    year: number;
    job?: string;
}

const ProfileCards = (props: ProfileCardProps) => {

    const {name, year, job} = props;

    return (
        <div className="card">
        <p>Nama: {name}</p>                                                                                                                                     
        <p>Birth Date: {year}</p>

        {job && <p>Job: {job}</p> } /* pengisian optional */
        </div>
    );
};

export default ProfileCards;