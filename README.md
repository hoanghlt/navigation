# Navigation

Bài này sẽ dung các thư viện:
@react-navigation/drawer
@react-navigation/native
@react-navigation/native-stack
react-native-gesture-handler
react-native-reanimated
react-native-safe-area-context
react-native-screens

- Để sắp xếp triển khai các navigation
- Cụ thể bài toán là hiển thị các Category món ăn, xem chi tiết nội dung mỗi category đó có những món gì, món đó sẽ gồm thành phần nào, cách làm(chế biến)

# Sử dụng hook useLayoutEffect:

    Được gọi ngay sau khi DOM đã được cập nhật, nhưng trước khi trình duyệt vẽ (paint). Điều này có nghĩa là useLayoutEffect sẽ chạy đồng bộ sau khi DOM thay đổi, nhưng trước khi người dùng thấy bất kỳ cập nhật nào trên màn hình. Điều này hữu ích khi bạn cần tính toán hoặc điều chỉnh layout của DOM trước khi trình duyệt vẽ.

- Khi nào nên sử dụng useLayoutEffect?
  Đo lường DOM: Nếu bạn cần đo kích thước của một phần tử DOM hoặc vị trí của nó ngay sau khi nó được render, và bạn muốn đảm bảo rằng kết quả đo lường này được sử dụng ngay lập tức trước khi vẽ.

  Đồng bộ hóa với các phép tính dựa trên layout: Khi bạn cần thực hiện các thay đổi đối với DOM hoặc layout mà phải được thực hiện trước khi trình duyệt render để tránh các phép tính hoặc layout sai lệch.

  Tránh nhấp nháy hoặc giật (flicker): Nếu bạn có một side effect có thể làm cho UI của bạn trông nhấp nháy hoặc không nhất quán, hãy dùng useLayoutEffect để đảm bảo mọi thay đổi xảy ra ngay lập tức.
