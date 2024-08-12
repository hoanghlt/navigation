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

# Sử dụng context API

là một công cụ mạnh mẽ để truyền dữ liệu giữa các thành phần mà không cần phải truyền qua từng cấp (props drilling). Điều này đặc biệt hữu ích khi bạn cần chia sẻ trạng thái hoặc dữ liệu giữa nhiều thành phần mà không muốn truyền dữ liệu qua từng cấp của cây thành phần.

- Khi nào nên sử dụng Context API?

* Truyền dữ liệu qua nhiều cấp: Khi bạn cần truyền dữ liệu từ một thành phần tổ tiên đến các thành phần con nhiều cấp dưới mà không muốn truyền qua từng cấp (props drilling).
* Chia sẻ trạng thái toàn cục: Khi có những trạng thái hoặc dữ liệu cần được sử dụng ở nhiều nơi trong ứng dụng, như trạng thái người dùng đã đăng nhập, chủ đề giao diện (theme), hoặc ngôn ngữ.

- Cách sử dụng:

* Dùng createContext() để tạo context
* Dùng Provider để quản lý trạng thái toàn cục của hệ sinh thái sử dụng context, có thể cung cấp dữ liệu hoặc chia sẻ trạng thái đến cái thành phần con mà không cần dùng props
* Dùng useContext() hoặc Consumer để sử dụng context

# Tư duy

- Muốn xóa 1 đối tượng có trong [] state, ta set lại giá trị [] bằng giá trị [] đã fillter chỉ lấy các giá trị khác giá trị cần loại bỏ
