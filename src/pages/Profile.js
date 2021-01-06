import React from 'react';
import styled from 'styled-components';
import { colors } from '../variables';

const ProfileContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  border-radius: 6px;
  border: 1px solid ${colors.border};
`;

const ProfilePicture = styled.div`
  padding: 1rem;
  width: 50%;
`;

const ProfileInformation = styled.div`
  padding: 1rem;
  width: 50%;
`;

const Label = styled.label`
  color: ${colors.weak};
`;

const ProfileItem = styled.p`
  padding: 1rem 0;
  font-size: 1.2rem;
`;

const ProfileWrapper = styled.div`
  padding: 1rem;
`;

// 仮置きデータ(後にreduxで管理する)
const user = {
  profileUrl:'https://avatars1.githubusercontent.com/u/25723193?s=60&u=5f2d871352830fdf1a79ee285e0712044105ca91&v=4',
  userName:'yukiyohure',
  email:'example@mock.com',
}

const Profile = () => {
  return (
    <ProfileWrapper>
      <h1>Profile</h1>
      <ProfileContainer>
        <ProfilePicture>
          <Label>プロフィール</Label>
          <ProfileItem>
            <img src={user.profileUrl} alt='profile' />
          </ProfileItem>
        </ProfilePicture>
        <ProfileInformation>
          <div>
            <Label>ユーザー名</Label>
            <ProfileItem>{user.userName}</ProfileItem>
          </div>
          <div>
            <Label>メールアドレス</Label>
            <ProfileItem>{user.email}</ProfileItem>
          </div>
        </ProfileInformation>
      </ProfileContainer>
    </ProfileWrapper>
  );
}

export default Profile;